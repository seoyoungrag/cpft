
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
 *         &lt;element name="GetNTSSendOptionResult" type="{http://ws.baroservice.com/}NTSSendOption" minOccurs="0"/&gt;
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
    "getNTSSendOptionResult"
})
@XmlRootElement(name = "GetNTSSendOptionResponse")
public class GetNTSSendOptionResponse {

    @XmlElement(name = "GetNTSSendOptionResult")
    protected NTSSendOption getNTSSendOptionResult;

    /**
     * getNTSSendOptionResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link NTSSendOption }
     *     
     */
    public NTSSendOption getGetNTSSendOptionResult() {
        return getNTSSendOptionResult;
    }

    /**
     * getNTSSendOptionResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link NTSSendOption }
     *     
     */
    public void setGetNTSSendOptionResult(NTSSendOption value) {
        this.getNTSSendOptionResult = value;
    }

}
