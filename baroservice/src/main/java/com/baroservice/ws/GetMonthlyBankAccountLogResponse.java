
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
 *         &lt;element name="GetMonthlyBankAccountLogResult" type="{http://ws.baroservice.com/}PagedBankAccountLog" minOccurs="0"/&gt;
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
    "getMonthlyBankAccountLogResult"
})
@XmlRootElement(name = "GetMonthlyBankAccountLogResponse")
public class GetMonthlyBankAccountLogResponse {

    @XmlElement(name = "GetMonthlyBankAccountLogResult")
    protected PagedBankAccountLog getMonthlyBankAccountLogResult;

    /**
     * getMonthlyBankAccountLogResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link PagedBankAccountLog }
     *     
     */
    public PagedBankAccountLog getGetMonthlyBankAccountLogResult() {
        return getMonthlyBankAccountLogResult;
    }

    /**
     * getMonthlyBankAccountLogResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link PagedBankAccountLog }
     *     
     */
    public void setGetMonthlyBankAccountLogResult(PagedBankAccountLog value) {
        this.getMonthlyBankAccountLogResult = value;
    }

}
