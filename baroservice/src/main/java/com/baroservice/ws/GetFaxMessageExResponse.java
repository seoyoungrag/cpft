
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="GetFaxMessageExResult" type="{http://ws.baroservice.com/}FaxMessageEx" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "getFaxMessageExResult"
})
@XmlRootElement(name = "GetFaxMessageExResponse")
public class GetFaxMessageExResponse {

    @XmlElement(name = "GetFaxMessageExResult")
    protected FaxMessageEx getFaxMessageExResult;

    /**
     * getFaxMessageExResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link FaxMessageEx }
     *     
     */
    public FaxMessageEx getGetFaxMessageExResult() {
        return getFaxMessageExResult;
    }

    /**
     * getFaxMessageExResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link FaxMessageEx }
     *     
     */
    public void setGetFaxMessageExResult(FaxMessageEx value) {
        this.getFaxMessageExResult = value;
    }

}
